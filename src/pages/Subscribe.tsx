import { useState, FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import { useCreateSubscriberMutation } from "../graphql/generated"

import { Logo } from "../components/Logo"
import { Footer } from "../components/Footer"
import CodeMockup from '../assets/code-mockup.png'
import ReactjsIcon from '../assets/reactjs-icon.png'

export function Subscribe() {
    const navigate = useNavigate()

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')

    const [createSubscriber, { loading }] = useCreateSubscriberMutation()

    async function handleSubscribe(event: FormEvent) {
        event.preventDefault()

        await createSubscriber({
            variables: {
                name,
                email,
            }
        })

        navigate('/event/lesson/starting-in-reactjs-in-2022')
        
    }

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            
            <div className="w-full sm:max-w-[400px] lg:max-w-[1100px] lg:flex items-center justify-between mt-20 mx-auto">
                
                <div className="flex flex-col xs:items-center lg:items-start xs:text-center lg:text-left max-w-[640px]">

                    <Logo width={300} height={50} />

                    <h1 className="xs:mt-6 lg:mt-8 xs:text-[30px] md:text-[35px] lg:text-[40px] leading-tight">
                        Build a <strong className="text-blue-500"> complete application </strong> from scratch with <strong className="text-blue-500"> React </strong> 
                    </h1>

                    <p className="mt-6 xs:text-sm md:text-base text-gray-200 leading-relaxed">
                        In just one week you will master in practice one of the most used technologies and with high demand to access the best opportunities on the market.
                    </p>

                </div>

                <div className="mt-6 p-8 bg-gray-700 border border-gray-500 rounded z-10 relative">
                    
                    <strong className="xs:text-lg md:text-xl lg:text-2xl mb-6 block">
                        Sign up for free
                    </strong>

                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">

                        <input 
                            className="bg-gray-900 rounded px-5 h-14"
                            type="text" 
                            placeholder="Your full name" 
                            onChange={event => setName(event.target.value)}
                        />
                        <input 
                            className="bg-gray-900 rounded px-5 h-14"
                            type="email" 
                            placeholder="Type your email" 
                            onChange={event => setEmail(event.target.value)}
                        />

                        <button 
                            type="submit"
                            disabled={loading}
                            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                        >
                            Secure my spot
                        </button>

                    </form>
                
                </div>
            
            </div>
           
            <img src={ReactjsIcon} className="absolute"  alt="React Icon" />
            <img src={CodeMockup} className="mt-10" alt="Code Mockup" />

            <div className="w-full px-6 bg-gray-900">
                <Footer />
            </div>
        
        </div>
    )
}