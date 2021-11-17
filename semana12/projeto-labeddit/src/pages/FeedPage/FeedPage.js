import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage";
import FeedPageCard from "./FeedPageCard";

export default function FeedPage() {
    useProtectedPage()

    return (
    <FeedPageCard/>
    );
}