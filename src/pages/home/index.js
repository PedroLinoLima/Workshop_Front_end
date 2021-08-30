import Coments from "../../components/coments";
import Header from "../../components/Header";
import { FeedContainer, GistIcon, Main, Post } from "./style";
function Home() {
  const posts = [
    {
      author: {
        name: "Pedro Lino de Lima",
        imageProfile : ""
      },
      created_at: "30/08/2021",
      title: "Este é um post sobre o Corinthians",
      description: "O Corinthians é o maior",
      image:
        "https://desenvolveitaquera.com.br/di/wp-content/uploads/2020/09/@jp_drone-Ag%C3%AAncia-Corinthians-1140x570.jpg",
      gist: "https://github.com/",
      categories: ["js", "backend", "front", "html", "css"],
      coments: [
        {
          author: {
            name: "Fulano",
          },
          created_at: "30/08/2021",
          description: "Vai Corinthians!!!",
        },
      ],
    },
  ];

  return (
    <>
      <Header />
      <Main>
        <nav>Olá</nav>
        <FeedContainer>
          {posts.map((post) => (
            <PostCard post={post} />
          ))}
        </FeedContainer>
        <aside>Action</aside>
      </Main>
    </>
  );
}

function PostCard({ post }) {
  
  return (
    <Post>
      <header>
        <img
          src="https://avatars.githubusercontent.com/u/77000970?v=4"
          alt=""
          />
        <strong>por {post.author.name}</strong>
        <p>{post.created_at}</p>
        {post.gist && <GistIcon />}
      </header>
      <main>
        <div>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </div>
        <img src={post.image} />
        <section>
          {post.categories.map(category => <p>{category}</p>)}
        </section>
      </main>
      <footer>
        <h2>Comentários</h2>
        {post.coments.map(coment => <Coments coment ={coment}/>)}
      </footer>
    </Post>
  );
}

export default Home;