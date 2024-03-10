
function HomePage(){
    let blogList = ["blog1" , "blog2" , "blog3"];
    return(
        <>
          <h1 className="home">Home</h1>
          <ul>
            {blogList.map((blog) => (
                <li><link rel="stylesheet" href="" />{blog}</li>
            ))}
          </ul>
        </>

    )
}


export default HomePage;