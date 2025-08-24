"use client";

import { useBalance } from "@repo/store/balance";
import { Appbar } from "@repo/ui/appbar";

export default function () {
  const balance = useBalance();
  return <Appbar onSignin={"signin"} onSignout={"Signout"} />
}