import Head from "next/head"
import { GetServerSideProps } from "next"
import { useEffect } from "react"

import PrismaClient from "@db/client"
import { User } from "@prisma/client"

import Button from "@components/Button"

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
        <title>nextjs-prisma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello world</h1>
      <p>Users</p>
      {data.map((user: User) => (
        <pre key={user.name}>{JSON.stringify(user, null, 2)}</pre>
      ))}
      <Button label="click me" />
    </div>
  )
}
