import { Page } from "@/types/page";
import { getAnime } from "@/utils/getAnime";
import MediaCard from "@/components/MediaCard";
import { Suspense } from "react";
const anime = [1,2,3,4,5,6,7,8,9,10, 11, 12]
export default async function LoadingAnime() {

  return (
    <div className="grid grid-cols-5  gap-4 gap-y-10">
      {anime?.map((item) => <div>1</div>)}
    </div>
  );
}
