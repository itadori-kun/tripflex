

"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
// import Image from 'next/image'

import { AppleIcon } from "@/components/icons/apple_icon"
import { FacebookIcon } from "@/components/icons/facebook_icon"
import { GoogleIcon } from "@/components/icons/google_icon"

const formSchema = z.object( {
    email: z
        .string()
        .email( { message: "Invalid email address" } ),
    password: z
        .string( {
            message: "Invalid password",
        } ),

} )

export function Login() {
    const form = useForm<z.infer<typeof formSchema>>( {
        resolver: zodResolver( formSchema ),
        defaultValues: {
            email: "",
            password: "",
        },
    } )

    // const { fields, append } = useFieldArray( {
    //     name: "urls",
    //     control: form.control,
    // } )

    // 2. Define a submit handler.
    function onSubmit( values: z.infer<typeof formSchema> ) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log( values )
    }

    return (
        <main className=" w-screen h-svh flex justify-center flex-col items-center sm:hidden px-7">
            <header className="w-full mb-12">
                <h1 className="text-3xl text-[#0c0c0c] font-bold text-center">
                    Welcome Back
                </h1>
            </header>

            <div className="w-full mb-1">
                <Form { ...form }>
                    <form onSubmit={ form.handleSubmit( onSubmit ) } className="space-y-4">
                        <FormField
                            control={ form.control }
                            name="email"
                            render={ ( { field } ) => (
                                <FormItem>
                                    <FormLabel className="text-base text-[#0c0c0c]/65">Email or Phone no</FormLabel>
                                    <FormControl className="rounded-full h-fit py-2 px-4 text-base">
                                        <Input type="email" placeholder="Email" { ...field } />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            ) }
                        />

                        <FormField
                            control={ form.control }
                            name="password"
                            render={ ( { field } ) => (
                                <FormItem>
                                    <FormLabel className="text-base text-[#0c0c0c]/65">Password</FormLabel>
                                    <FormControl className="rounded-full h-fit py-2 px-4 text-base">
                                        <Input type="password" placeholder="Password" { ...field } />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            ) }
                        />

                        <Button type="submit" className="w-full bg-[#fe7833] text-white text-xl font-medium rounded-full py-2 h-fit mt-6 block">Log In</Button>
                    </form>
                </Form>
            </div>
            <div className="w-full mb-10">
                <p className="text-base text-[#0c0c0c]/65">Do not have an account? <Link className="text-[#fe7833]" href={ "/register" }>Sign Up</Link></p>
            </div>
            <div className="w-full mb-4 text-2xl text-[#0c0c0c]/65 text-center">
                OR
            </div>
            <div className="flex flex-col gap-2.5 w-full">
                <Button type="button" className="flex rounded-full bg-transparent text-[#0c0c0c] border border-black/40 text-lg font-medium py-1 h-fit focus:bg-transparent hover:bg-slate-100 [&_svg]:size-8"><GoogleIcon />Sign in with Google</Button>
                <Button type="button" className="flex  rounded-full bg-transparent text-[#0c0c0c] border border-black/40 text-lg font-medium py-1 h-fit focus:bg-transparent hover:bg-slate-100 [&_svg]:size-8"><AppleIcon /> Sign in with Apple</Button>
                <Button type="button" className="flex  rounded-full bg-transparent text-[#0c0c0c] border border-black/40 text-lg font-medium py-1 h-fit focus:bg-transparent hover:bg-slate-100 [&_svg]:size-6"><FacebookIcon />Sign in with Facebook</Button>
            </div>
        </main>
    )
}



export default Login
