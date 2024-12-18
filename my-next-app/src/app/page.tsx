
"use client"
import { Box, Button, Heading } from "@adaptavant/eds-core";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
console.log(router)
  return (
    <Box className="">
      <Heading as="h2" className="text-positive">Hello</Heading>
      <Link href="/about">
       <Button>Click me</Button>
       </Link>
    </Box>
  );
}
