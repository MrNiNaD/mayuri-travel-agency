"use client";
import { useParams } from "next/navigation";
import React from "react";

const Something = () => {
  const test = useParams();
  console.log({ test });

  return <div>Something</div>;
};

export default Something;
