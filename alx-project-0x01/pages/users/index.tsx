import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps, UserData } from "@/interfaces";
import { useState } from "react";
import UserModal from "@/components/common/UserModal";

interface UserPagesProps {
    posts: UserProps[]
}

const Users:React.FC<UserPagesProps> = ({posts}) => {
    const [isModalOpen, setModalOpen ] = useState(false);
    const [user, setUser] = useState<UserData|null>(null);

    const handleAddUser = (newUser: UserData) => {
        setUser({...newUser, id:posts.length + 1});
        console.log(user);
    };


    return (
        <>
            <div className="flex flex-col h-screen">
                <Header />
                <main className="p-4">
                    <div className="flex justify-between">
                        <h1 className="text-2xl font-semibold">Our Attendees</h1>
                        <button className="border-0 border-b-3 rounded-full hover:border-b-1 hover:cursor-pointer" onClick={() => setModalOpen(true)}>
                            Sign Up
                        </button>
                    </div>
                    <div className="grid grid-cols-4 md:auto-cols-max">
                        {
                            posts?.map(({id,name,username,phone,email,website,address,company}: UserProps, key: number) => (
                                <UserCard 
                                    key={key}
                                    id={id}
                                    name={name}
                                    username={username}
                                    phone={phone}
                                    email={email}
                                    website={website}
                                    address={address}
                                    company={company}
                                />
                            )
                        )
                        }
                    </div>
                </main>
                {
                    isModalOpen && (<UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser}/>)
                }
            </div>
        </>
    )
}

export async function getStaticProps() {
    const response = await fetch ("https://jsonplaceholder.typicode.com/users");
    const posts = await response.json();
    return {
        props: {
            posts,
        },
    };
}
export default Users;
