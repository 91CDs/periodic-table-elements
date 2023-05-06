import { ElementCard } from '@/components/ElementCard'
import { ElementPanel } from '@/components/ElementPanel';
import { Title } from '@/components/Title';
import { useElementID } from '@/hooks/elementID';
import style from "@/styles/Home.module.css"
import axios from 'axios'
import Head from 'next/head'

export async function getServerSideProps() {
  const api = axios.create({
    baseURL: "http://localhost:3000/api"
  });

  const elements = await api
    .get<Periodic>("/element")
    .then<ChemicalElement[]>((res) => { return res.data.elements });
  
  return {
    props: {
      elements
    }
  }
}

export default function Home({ elements }: { 
  elements: ChemicalElement[] 
}) {
  const elementId = useElementID()[0]

  return (
    <>
      <Head>
        <title>Periodic Table of Elements</title>
        <meta name="description" content="The Periodic Table of Elements" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title />
      <ElementPanel element={elements[elementId]}/>
      <div className={style.periodic}>
        {elements.map((element, id) => {
          return <ElementCard element={element} key={id} index={id} />
        })}
      </div>
    </>
  )
}
