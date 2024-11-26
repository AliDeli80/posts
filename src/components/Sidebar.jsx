import React from "react";
import Link from "./Link";

export default function Sidebar(props) {

    const Links = props.posts ? props.posts.map((post, index) =>
        <Link
            key={post.id}
            title={post.title}
            index={index}
            handleClick={props.handleChangeCurrentPost}
        />) : null;
    return (
        <aside>
            <ul>
                {Links}
            </ul>
        </aside>
    )
}