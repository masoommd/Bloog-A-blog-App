import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full  mb-4 relative border rounded-xl p-4 border-sky-800">
                <div className="w-full my-6 flex flex-wrap justify-center ">
                    <h1 className="text-2xl  font-bold">{post.title}</h1>
                </div>
                <div className="flex flex-wrap justify-between">
                <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl h-[350px] w-[350px] mt-6 ml-4"
                    />
                    
                <div className="w-3/5 text-justify mt-6 mr-6 border-2 p-2 border-blue-950">
                    {parse(post.content)}
                    </div>
                </div>
                

                {isAuthor && (
                    <div className="absolute right-6 top-6">
                        <Link to={`/edit-post/${post.$id}`}>
                            <Button bgColor="bg-green-500" className="mr-3">
                                Edit
                            </Button>
                        </Link>
                        <Button bgColor="bg-red-500" onClick={deletePost}>
                            Delete
                        </Button>
                    </div>
                    
                )}
</div>

            </Container>
        </div>
    ) : null;
}