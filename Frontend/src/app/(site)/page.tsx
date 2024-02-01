import Header from "@/components/Header"
import ListItem from "@/components/ListItem"
import PageContent from "./components/pageContent"


export const revalidate = 0;

export default function Home() {

  return (
    <div className="
      bg-neutral-700
      rounded-lg
      h-full
      w-full
      overflow-hidden
      overflow-y-auto
    ">
        <Header>
          <div className="mb-2">
            <h1 className="
              text-white
              text-3xl
              font-semibold font-roboto">
              Mood-X 
            </h1>
          </div>
        </Header>
          <div className="
          mt-2 
          mb-7 
          px-6">
          <div className="
          flex 
          justify-between 
          items-center">
              <h2 className="
              text-white 
              text-2xl 
              font-semibold">
                Newest Songs
              </h2>
          </div>
            <div >
              <PageContent/>
            </div>
          </div>
    </div>
  )
}
