import Head from "next/head"
import { GetServerSideProps } from "next"
import { useEffect } from "react"

import Button from "@components/Button"
import PrismaClient from "@db/client"

const prisma = PrismaClient.getInstance().prisma

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await prisma.user.findMany()
  return {
    props: {
      data,
    },
  }
}

export default function Home({ data }) {
  useEffect(() => {
    console.log("data", data)
  }, [data])

  return (
    <div>
      <Head>
        <title>nextjs-prisma-express</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello world</h1>
      <Button />
    </div>
  )
}
