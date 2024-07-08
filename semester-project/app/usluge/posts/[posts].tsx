
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const Post = ({ params }: { params: { postId: number } }) => {
    const { postId } = params;
    const router = useRouter();
    console.log("usli smo ", postId)

};

export default Post;