import Head from 'next/head';

class Title extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Title">
                {this.props.title}
                <style jsx>{`
                    .Title {
                        font-family: Nunito Sans;
                        font-style: normal;
                        font-size: 64px;
                        font-weight: 200;
                        color: #FFFFFF;
                        position: relative;
                        margin-left: 80px;
                        margin-right: 80px;
                        margin-top: 45px;
                        margin-bottom: 45px;
                        display: inline-block;
                        vertical-align: middle;
                    }
                `}</style>
            </div>
        );
    }
}

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Menu">
                {this.props.children}
                <style jsx>{`
                    .Menu {
                        position: relative;
                        margin-left: 160px;
                        margin-top: 45px;
                        margin-right: 160px;
                        margin-bottom: 45px;
                        display: inline-block;
                    }
                `}</style>
            </div>
        );
    }
}

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="MenuItem">
                {this.props.text}
                <style jsx>{`
                    .MenuItem {
                        font-family: Nunito Sans;
                        font-style: normal;
                        font-size: 16px;
                        font-weight: 300;
                        color: #FFFFFF;
                        display: inline-block;
                        margin-right: 48px;
                        margin-left: 48px;
                        padding-bottom: 16px;
                        padding-top: 16px;
                    }
                    .MenuItem:hover {
                        border-bottom: solid #FF0C00;
                    }
                `}</style>
            </div>
        );
    }
}

class TopBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="TopBar">
                {this.props.children}
            </div>
        );
    }
}

class Description extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Description">
                {this.props.children}
                <style jsx>{`
                    .Description {
                        font-family: Nunito Sans;
                        font-style: normal;
                        font-size: 16px;
                        font-weight: 300;
                        color: #FFFFFF;
                        position: relative;
                        left: 640px;
                        top: 270px;
                        width: 640px;
                        text-align: right;
                    }
                `}</style>
            </div>
        );
    }
}

function Index() {
    return (
        <div>
            <Head>
                <title>Ivan Leon</title>
                <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300&display=swap" rel="stylesheet" />
            </Head>
            <TopBar>
                <Title title="Iván León"/>
                <Menu>
                    <MenuItem text="about me"/>
                    <MenuItem text="project"/>
                    <MenuItem text="blog"/>
                    <MenuItem text="media"/>
                </Menu>
            </TopBar>
            <Description>
                <p>
                    This is a creative space; somewhere I can dive into chaos to discover; somewhere to build as a form of expression. You can explore the website to find more about me. Enjoy
                    <span style={{color: '#FF0C00'}}>
                        !
                    </span>
                </p>
            </Description>
            <style global jsx>{`
                html {
                    height: 100%;
                    background-image: url("/static/dark_blue_gradient.png");
                    background-repeat: no-repeat;
                    background-size: cover;
                }
            `}</style>
        </div>
    );
}

export default Index;
