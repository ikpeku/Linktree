import { Button } from "./button"

const links = [
    {
        id: "twitter",
        title: "Twitter Link",
        link: "https://twitter.com/E11eaven"

    },
    {
        id: "btn__zuri",
        title: "Zuri Team",
        link: "https://training.zuri.team/"

    },
    {
        id: "books",
        title: "Zuri Books",
        link: "http://books.zuri.team"

    },
    {
        id: "book__python",
        title: "Python Books",
        link: "https://books.zuri.team/python-for-beginners?ref_id=<I_Am_DanielIkpe>"

    },
    {
        id: "pitch",
        title: "Background Check for Coders",
        link: "https://background.zuri.team"

    },
    {
        id: "book__design",
        title: "Design Books",
        link: "https://books.zuri.team/design-rules"

    }
]

export const Nav = () => {
    return (
        <div className="w-full md:w-3/5 mx-auto">
            {links.map(({id,title, link}) => <a key={id} href={link} target="_blank">
                <Button text={title}/>
            </a> )}
        </div>
    )
}



