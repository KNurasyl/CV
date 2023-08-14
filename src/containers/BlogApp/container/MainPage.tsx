import React, { useState } from "react";
import Spinner from "../components/UI/Spinner/Spinner";
import { PostWindow } from "../components/PostWindow/PostWindow";
import { Card } from "../components/Card/Card";


export const MainPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [posts, setPosts] = useState<any>([]);

    const readPostHandler = (id: string) => {
        
    };

    const addClickHandler = () => {
        
    };

    const removeHandler = (id: string) => {
        
    };



    return (
        isLoading
        ?
        <Spinner/>
        :
        <div className="main_page_blogApp">
            <PostWindow addClickHandler={addClickHandler}>
                {
                    posts?.map((post: any) => {
                        return (
                            <Card 
                                key={post._id}
                                img={post.image}
                                title={post.title}
                                date={new Date(parseInt(post.date)).toDateString()}
                                readPostClick={() => readPostHandler(post._id)}
                                removeClick={() => removeHandler(post._id)}
                            />
                        )
                    })
                }
            </PostWindow>
        </div>
    );
};