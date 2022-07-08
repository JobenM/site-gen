import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

interface IArticle {
  title: string;
  description: string;
  source: { name: string }
  url: string;
  urlToImage: string | null;
}

interface IPageData {
  data: { articles: IArticle[]; }
}

const Articles: NextPage<IPageData> = ({ data }) => {
  console.log(data)
  return (
    <div>
      <Head>
        <title>Top 10 Stories today</title>
        <meta name="description" content="Top 5 articles right now" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Top 5 Stories today</h1>
        <ul>
          {data.articles.map(({ title, description, url, source, urlToImage }) => <li style={{ borderBottom: '1px solid lightgrey', paddingBottom: '1rem' }} key={title}>
            <h2 >{title}</h2>
            {urlToImage &&
              <div style={{ width: '500px' }}>
                <Image src={urlToImage} alt={title} width={300} height={200} />
              </div>
            }
            <p>{description}</p>
            <a style={{ color: 'darkblue' }} href={url} rel="noreferrer" target="_blank">Visit {source.name} article here</a>
          </li>)}
        </ul>
      </main>
    </div>)
}

// This gets called on every request
export const getServerSideProps = async () => {

  const headers = new Headers();

  headers.append('X-Api-Key', '54ddc98c540242b08f1a7a09c98d7999')

  const Init = {
    method: 'GET',
    headers,
  };

  const res = await fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news,abc-news,google-news-uk,independent,reddit-r-all,vice-news&pageSize=10`, Init)
  const data = await res.json()

  return { props: { data } }
}

export default Articles