import prisma from "@/app/lib/data";

export default async function Page({params}: {
    params: { id: string };
}) {
    const userId = Number(params.id)
    const user = await prisma.user.findUnique({where: {id: Number(params.id)}});
    return (
        <table>
            <caption>User Details</caption>
            <tbody>
            <tr>
                <td>Id</td>
                <td>{user?.id}</td>
            </tr>
            <tr>
                <td>Name</td>
                <td>{user?.name}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>{user?.email}</td>
            </tr>
            </tbody>
        </table>
        );
}