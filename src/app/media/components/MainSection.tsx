// import { Description } from "@radix-ui/react-dialog"

// type Props = {}
// export default function MainSection({}: Props) {
//   // coverImage
//   // title
//   // averageScore
//   // status
//   // episodes
//   // startDate
//   // endDate
//   // description
//   // format
//   // studios
//   // season
//   // seasonYear
//   // genre
//   return (
//     <section className="flex flex-col overflow-hidden md:flex-row">
//       <Image
//         src={coverImage.extraLarge}
//         alt={title.english}
//         width={400}
//         height={570}
//         style={{ boxShadow: `0px -500px 1600px  ${coverImage.color}` }}
//         className="mx-auto h-[300px] w-[200px] sm:mx-auto sm:h-[440px] sm:w-[300px] md:h-[500px] md:w-[350px] lg:h-[570px] lg:w-[400px]"
//       />
//       <div className="p-4">
//         <Title1>{title.english || title.romaji}</Title1>
//         {title.romaji && <Title2>{title.romaji}</Title2>}
//         <section className="mt-5 flex items-center gap-4">
//           <Button variant="warm-primary" className="flex gap-2">
//             <Youtube />
//             Trailer
//           </Button>
//           {averageScore && (
//             <div>
//               <b>Average score:</b> {averageScore.toString()}
//             </div>
//           )}
//           {status && (
//             <div>
//               {" "}
//               <b>Status:</b>{" "}
//               {status === "NOT_YET_RELEASED" ? "ANNOUNCE" : status.toString()}
//             </div>
//           )}
//           {episodes && (
//             <div>
//               {" "}
//               <b>Episodes:</b> {media.episodes.toString()}
//             </div>
//           )}
//         </section>
//         <section className="mt-5 flex flex-col gap-2">
//           <div>
//             {startDate.day && (
//               <>
//                 <b>{endDate.day ? "Released from: " : "Realising from: "}</b>{" "}
//                 {startDate.day} {months[startDate.month - 1]}, {startDate.year}
//                 {endDate.day && (
//                   <>
//                     to {endDate.day} {months[endDate.month - 1]}, {endDate.year}
//                   </>
//                 )}
//               </>
//             )}
//           </div>
//           <MediaDescription description={description} />

//           {/* {favourites && <div> <b>User favourites:</b> {favourites.toString()}</div>} */}
//           {format && (
//             <div>
//               {" "}
//               <b>Format:</b> {format.toString()}
//             </div>
//           )}

//           {/* <div> <b>Tags:</b> {media.tags.map(tag => (
//           <Badge className="cursor-default">
//           {tag.name}
//           </Badge>
//         ))}</div> */}
//           {}
//           {season && seasonYear && (
//             <div>
//               {" "}
//               <b>Season:</b> {season?.toString()} {seasonYear.toString()}
//             </div>
//           )}
//           {/* {source && <div> <b>Source:</b> {source.toString()}</div>} */}
//           {studios && (
//             <div>
//               {" "}
//               <b>Studio:</b>{" "}
//               {studios.nodes.map((studio) => (
//                 <Link
//                   key={studio.name}
//                   className="hover:underline"
//                   href={`/studio/${studio.id}`}
//                 >
//                   {studio.name}
//                 </Link>
//               ))}
//             </div>
//           )}
//           {genres && (
//             <div className="flex flex-wrap gap-1">
//               {" "}
//               <b>Genres:</b>{" "}
//               {genres.map((genre) => (
//                 <Badge key={genre} className="cursor-default">
//                   {genre}
//                 </Badge>
//               ))}
//             </div>
//           )}
//         </section>
//         <section></section>
//       </div>
//     </section>
//   )
// }
