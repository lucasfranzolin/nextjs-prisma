import Head from "next/head"
import { GetServerSideProps } from "next"
import { useEffect } from "react"

import { useStoreActions } from "@store/hooks"
import PrismaClient from "@db/client"
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
  const setUsers = useStoreActions((actions) => actions.setUsers)

  useEffect(() => {
    setUsers(data)
  }, [data])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Head>
        <title>nextjs-prisma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello world</h1>
      <p>Check Redux Dev Tools</p>
      <br />
      <p>
        Button from Storybook with <code>styled-components</code>
      </p>
      <Button>Primary</Button>
    </div>
  )
}
