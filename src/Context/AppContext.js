import { baseUrl } from "../baseUrl";
import { toast } from "react-toastify";  
import { createContext, useState } from "react";  

// Creating Context
export const AppContext = createContext();

// Creating Provider
export function AppContextProvider({ children }) { 
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, settotalPages] = useState(null);


  // Data Filling
  async function fetchBlog(page = 1,tag=null,category) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    if(tag) {
      url += `&tag=${tag}`;
    }
    if(category){
      url += `&category=${category}`;
    }
    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log(data);
      setPage(data.page);
      setPosts(data.posts);
      settotalPages(data.totalPages);
    } catch (error) {
      toast.error("Something went wrong"); 
      setPage(1);
      setPosts([]);
      settotalPages(null);
    }
    setLoading(false);
  }

  function handlePageChange(page) {
    setPage(page);
    fetchBlog(page);
  }

  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    settotalPages,
    handlePageChange,
    fetchBlog
  };
  console.log("Printing Data")
  console.log(value);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}
