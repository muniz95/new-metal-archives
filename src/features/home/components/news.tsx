import { FC } from "react";
import { useNews } from "../api/get-news";
import { Spinner } from "@/components/spinner";

const News: FC = () => {
  const newsQuery = useNews({
    page: 1,
  });
  if (newsQuery.isLoading) {
    return (
      <div className="flex h-48 w-full items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  const news = newsQuery.data;
  return (
    <>
      {news?.map(item => 
        <div className="news-box" key={item.id}>
          <div className="title">{item.title}</div>
          <div className="content">
            {item.content}
          </div>
          <div className="author">{item.author}</div>
        </div>
      )}
    </>
  );
}

export default News;