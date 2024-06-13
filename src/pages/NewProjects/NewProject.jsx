import SplitPane from "react-split-pane"
import { FaCss3, FaHtml5, FaJs } from "react-icons/fa"
import { FcSettings } from "react-icons/fc"
import { FaChevronDown } from "react-icons/fa6"
import { useEffect, useState } from "react"
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { Link } from "react-router-dom"
import logo from '../../assets/img/logo.webp';


const NewProject = () => {

    const [html ,setHtml] = useState("")
    const [css, setCss] = useState("")
    const [js, setJs] = useState("")
    const [ outPut, setOutPut] = useState("")
    const [title, setTitle] = useState("Untitled")

    const [isTitle, setIsTitle] = useState("")

    useEffect(() => {
        updatedCode()
    }, [html, css, js])

    const updatedCode = () => {
        const combinedOutput = `
            <html>
                <head>
                    <style>${css}</style>
                </head>
                <body>  
                    ${html}              
                    <script>${js}</script>
                </body>
            </html>
        `

        setOutPut(combinedOutput)
    }

    return (
        <div className="w-screen h-screen flex flex-col justify-start items-start overflow-hidden">
            
            <header className="w-full flex items-center justify-between  px-4 border-white h-[70px]">
                <div className="flex justify-center items-center gap-6">
                    <Link to={"/home/projects"}> 
                        <img src={logo} className="w-32 h-auto object-contain"/>
                    </Link>
                    {isTitle ? <input className="text-white" type="text" value={title} onChange={(e) => {setTitle(e.target.value)}}/> : <p className="px-2 py-4 text-white">{title}</p>}
                </div>
                

            </header>            
            
                <SplitPane split="horizontal" minSize={100} maxSize={-100} defaultSize={"50%"} className="mt-[70px]">
                    <SplitPane split="vertical" minSize={200}>
                        <div className="w-full h-full flex justify-start items-start flex-col">
                            <div className="flex justify-between w-full items-center">
                                <div className="bg-secondary px-4 py-2 border-t-4 flex justify-center items-center gap-3 border-gray-500">
                                    <FaHtml5 className="text-xl text-red-500 " />
                                    <p className=" font-bold text-white ">HTML</p>
                                </div>
                                <div className="cursor-pointer flex item-center justify-center gap-3 px-4">
                                    <FcSettings className="text-xl" />
                                    <FaChevronDown className="text-xl text-secondary"/>
                                </div>                               
                            </div>
                            <div className="w-full px-2">
                            <CodeMirror
                                value={html}
                                height="500px"
                                theme={"dark"}
                                extensions={[javascript({ jsx: true })]}
                                onChange={(value) => {setHtml(value)}}
                             />
                            </div>

                        </div>
                        <SplitPane split="vertical" minSize={200}>
                            <div className="w-full h-full flex justify-start items-start flex-col">
                                <div className="flex justify-between w-full items-center">
                                    <div className="bg-secondary px-4 py-2 border-t-4 flex justify-center items-center gap-3 border-gray-500">
                                        <FaCss3 className="text-xl text-blue-500 " />
                                        <p className=" font-bold text-white ">CSS</p>
                                    </div>
                                    <div className="cursor-pointer flex item-center justify-center gap-3 px-4">
                                        <FcSettings className="text-xl" />
                                        <FaChevronDown className="text-xl text-secondary"/>
                                    </div>
                            </div>
                            <div className="w-full px-2">
                            <CodeMirror
                                value={css}
                                height="500px"
                                theme={"dark"}
                                extensions={[javascript({ jsx: true })]}
                                onChange={(value) => {setCss(value)}}
                             />
                            </div>
                                
                            </div>
                            <div className="w-full h-full flex justify-start items-start flex-col">
                                <div className="flex justify-between w-full items-center">
                                    <div className="bg-secondary px-4 py-2 border-t-4 flex justify-center items-center gap-3 border-gray-500">
                                        <FaJs className="text-xl text-yellow-500 " />
                                        <p className=" font-bold text-white ">JavaScript</p>
                                    </div>
                                    <div className="cursor-pointer flex item-center justify-center gap-3 px-4">
                                        <FcSettings className="text-xl" />
                                        <FaChevronDown className="text-xl text-secondary"/>
                                    </div>
                                </div>
                                <div className="w-full px-2">
                                <CodeMirror
                                    value={js}
                                    height="500px"
                                    theme={"dark"}
                                    extensions={[javascript({ jsx: true })]}
                                    onChange={(value) => {setJs(value)}}
                                />
                                </div>
                            </div>
                        </SplitPane> 
                                                
                    </SplitPane>
                    
                    <div className=" bg-white w-full h-full" >
                        <iframe title="Result" srcDoc={outPut} style={{border : "none"}}/>
                    </div>
                </SplitPane> 
        </div>
        
    )
}

export default NewProject
