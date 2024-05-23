"use client"
import { Skeleton } from "@/components/ui/skeleton"
import { motion } from "framer-motion"

const anime = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
]
export default function MediaLoading() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="grid auto-rows-auto grid-cols-2 justify-items-center gap-4 gap-y-10  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5"
      >
        {anime?.map((item) => (
          <main
            className="relative w-[160px] min-w-[210px] cursor-pointer transition-all hover:text-brand-primary  sm:min-w-[180px] md:min-w-[190px] lg:min-w-[180px]"
            key={item}
          >
            <Skeleton className="h-[250px] max-h-[280px] w-[100px] min-w-[210px] rounded-xl  sm:max-h-[250px] sm:min-w-[180px] md:min-w-[190px] lg:min-w-[180px] " />
            <Skeleton className="mt-1 h-[20px] w-full"></Skeleton>
            <Skeleton className="mt-1 h-[20px] w-[90px]"></Skeleton>
            <Skeleton className="absolute -right-0 -top-2 h-[22px] w-[75px] rounded-full"></Skeleton>
          </main>
        ))}
      </motion.div>
      <div className="mx-auto my-5 w-fit">
        {/* <NavigatePagination pageInfo={pageInfo} /> */}
      </div>
    </>
  )
}
export async function FullMediaLoading() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="grid auto-rows-auto grid-cols-2 justify-items-center gap-4 gap-y-10  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5"
      >
        {anime?.map((item) => (
          <main
            className="relative w-[160px] min-w-[210px] cursor-pointer transition-all hover:text-brand-primary  sm:min-w-[180px] md:min-w-[190px] lg:min-w-[180px]"
            key={item}
          >
            <Skeleton className="h-[250px] max-h-[280px] w-[100px] min-w-[210px] rounded-xl  sm:max-h-[250px] sm:min-w-[180px] md:min-w-[190px] lg:min-w-[180px] " />
            <Skeleton className="mt-1 h-[20px] w-full"></Skeleton>
            <Skeleton className="mt-1 h-[20px] w-[90px]"></Skeleton>
            <Skeleton className="absolute -right-0 -top-2 h-[22px] w-[75px] rounded-full"></Skeleton>
          </main>
        ))}
      </motion.div>
      <div className="mx-auto my-5 w-fit">
        {/* <NavigatePagination pageInfo={pageInfo} /> */}
      </div>
    </>
  )
}

