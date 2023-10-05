"use client";
import { useParams } from "next/navigation";
import React from "react";

const Token = () => {
  const test = useParams();
  console.log({ test });

  return <div>Something</div>;
};

export default Token;
