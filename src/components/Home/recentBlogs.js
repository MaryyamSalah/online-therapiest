import React , {useEffect,useState} from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../../firebaseConfig";
  
function RecentBlogs() {
    const [blogs , setBlog] = useState([]);

    const collectionReference = collection (db , "Blogs");
    useEffect (()=> {
      const fetchBlogs = async()=>{
        const data = await getDocs(collectionReference);
        setBlog(data.docs.map((doc)=> ({ ...doc.data(), id:doc.id})))
      }
      fetchBlogs();
    },[])
  return (
    <div>
      <h1>recent home</h1>
<div className="flex mx-24">
      {blogs.map((blog)=>{
        return(
          <div className="px-4 py-12"
          key={blog.id}>
            <img src= {blog.ImgText}
      alt="first image" className=" max-w-xs hover:scale-110 transition duration-300 ease-in-out" />


          </div>

        )
      })}

</div>
    </div>
  );
}

export default RecentBlogs;