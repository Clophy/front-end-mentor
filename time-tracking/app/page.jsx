"use client"
import Person from "@/components/person";
import Stats from "@/components/stats";
import { useState } from "react";

export default function Home() {
  const [tab, setTab]  = useState(0)
    return (
    <>
      <Person tab={tab} setTab={setTab}/>
      <Stats tab={tab} setTab={setTab}/>
    </>
  )
}
