import UsersTable from "@/app/ui/users/users";
import UserSearch from "@/app/ui/users/search";


export default async function Page({searchParams}: {
    searchParams?: { q: string };
}) {
    console.log(searchParams?.q)
    return (
    <>
        <UserSearch placeholder="Search User..."/>
        <UsersTable query={searchParams?.q}/>
    </>);
}