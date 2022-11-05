// import { Button } from "./button"

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

    },
    {
        id: "contact",
        title: "Contact Me",
        link: "/contact"

    }
]

export const Nav = () => {
    return (
        <div className="w-full md:w-3/5 mx-auto">
            {links.map(({id,title, link}) => 
            <div className='w-full bg-[#EAECF0;] text-center rounded-md py-3 md:py-5 my-3 md:my-5'>
                  <a key={id} id={id} href={link} target="_blank" rel="noreferrer noopener" className="w-full">
                {/* <Button text={title}/> */}
                {title}
            </a>
            </div>
           )} 
        </div>
    )
}



