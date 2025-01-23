
const BlogDetails = async ({ params }) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await response.json();
    console.log(post);
    const { title, body, id } = post || {}
    return (
        <div>
            <h2 className='text-3xl font-bold text-center'>Blog Details</h2>
            <dl className="flex  justify-between gap-4 w-1/2 mx-auto shadow-lg p-5 border-t-8 mt-4">
                <div className="flex flex-col justify-start gap-2">
                    <dt className="font-medium text-gray-900">ID</dt>
                    <dt className="font-medium text-gray-900">Title</dt>
                    <dt className="font-medium text-gray-900">Details</dt>                   
                </div>
                <div className="border"></div>
                <div className="flex flex-col justify-start gap-2">
                    <dd className="text-gray-700 sm:col-span-2">{id}</dd>
                    <dd className="text-gray-700 sm:col-span-2">{title}</dd>
                    <dd className="text-gray-700 sm:col-span-2">
                        {body}
                    </dd>
                </div>
            </dl>
        </div>
    );
};

export default BlogDetails;
