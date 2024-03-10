import Link from "next/link";
function HomePage () {
    const blog = ["blog 1" , "blog 2" , "blog 3"];

    return (
        <>
          <p>home page</p>
          <ul>
          {blog.map((blog, index) => (
                    <li key={index}>
                        <Link href={`/blog/${index+1}`}>{blog}</Link>
                    </li>
                ))}
          </ul>
        </>
    )
}

export default HomePage