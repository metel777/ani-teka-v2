import { Skeleton } from "@/components/ui/skeleton";
import { LoaderCircle } from "lucide-react";

export default function MediaLoading() {
  return (
    <main className="mb flex h-screen flex-col gap-10 ">
      <section className="flex flex-col overflow-hidden md:flex-row ">
        <Skeleton className="mx-auto h-[300px] w-[200px] sm:mx-auto sm:h-[440px] sm:w-[300px] md:h-[500px] md:w-[350px] lg:h-[570px] lg:w-[400px]" />
        <div className="p-4">
          <Skeleton className="h-[45px] w-[400px] " />
          <Skeleton className="mt-1 h-[30px] w-[300px] " />
          <Skeleton className="mt-4 h-[40px] w-full " />
          <Skeleton className="mt-4 h-[250px] sm:w-[500px] md:w-[615px] lg:w-[667px] "></Skeleton>
          <Skeleton className="mt-1 h-[27px] w-[300px] " />
          <Skeleton className="mt-1 h-[27px] w-[300px] " />
          <Skeleton className="mt-1 h-[27px] w-[300px] " />
          <Skeleton className="mt-1 h-[27px] w-[300px] " />
        </div>
      </section>
      <div className="mx-auto mt-48 flex w-[100px] items-center justify-center">
        <LoaderCircle size={50} className=" animate-spin" />
      </div>
    </main>
  )
}