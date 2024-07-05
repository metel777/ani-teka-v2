import { db } from "@/lib/db";
import { Session } from "next-auth";

export function handleSaveList(mediaId: number, selectedList: "Planning" | "Watching" | "Paused" | "Dropped", session: Session) {
    return db
      .prepare(
        `INSERT INTO userLibrary (mediaId, list, userId) VALUES (?, ?, ?);`,
      )
      .run(mediaId, selectedList, session?.user?.email)
  }