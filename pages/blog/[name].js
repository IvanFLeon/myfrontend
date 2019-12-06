import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import ReactMarkdown from 'react-markdown'
const BLOG_QUERY = gql`
    query Blog($name: String!){
        blog(name: $name) {
            name,
            author,
            title
        }
    }
`

export default function Blog(props) {

    const { loading, error, data } = useQuery(BLOG_QUERY, {
        variables: { name: props.name },
    });

    return (
        <BlogMeta loading={loading} data={data}>
            <ReactMarkdown source={props.source}/>
        </BlogMeta>
    )
}

Blog.getInitialProps = async function(ctx) {
    var { req, query } = ctx;
    
    const source = await import (`../../public/blog/${query.name}.md`);
    
    return {
        name: query.name,
        source: source.default
    };
}

function BlogMeta (props) {
    if ( props.loading ) {
        return (
            <div>
                Loading ...
            </div>
        )
    }
    else {
        return (
            <div>
                {props.data.blog.name}
                {props.data.blog.author}
                {props.data.blog.title}
                {props.children}
            </div>
        )
    }
}