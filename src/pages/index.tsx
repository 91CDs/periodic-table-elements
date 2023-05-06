import { ElementCard } from '@/components/ElementCard'
import { ElementPanel } from '@/components/ElementPanel';
import { Title } from '@/components/Title';
import style from "@/styles/Home.module.css"
import axios from 'axios'
import Head from 'next/head'

export async function getServerSideProps() {
  const api = axios.create({
    baseURL: "http://localhost:3000/api"
  });
  const elementId = 0;

  const elements = await api
    .get<Periodic>("/element")
    .then<ChemicalElement[]>((res) => { return res.data.elements });

  const selectedElement = await api
    .get<ChemicalElement>(`/element/${elementId}`)
    .then((res) => { return res.data });

  return {
    props: {
      elements,
      selectedElement
    }
  }
}

export default function Home({ elements, selectedElement }: { 
  elements: ChemicalElement[], 
  selectedElement: ChemicalElement
}) {

  return (
    <>
      <Head>
        <title>Periodic Table of Elements</title>
        <meta name="description" content="The Periodic Table of Elements" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title />
      {/* <ElementPanel element={selectedElement}/> */}
      <div className={style.periodic}>
        {elements.map((element, id) => {
          return <ElementCard element={element} key={id} index={id} />
        })}
      </div>
    </>
  )
}
