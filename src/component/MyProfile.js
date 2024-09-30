const user = {
    name: "Kendrick Lamar",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5U_N-legqe_vOKHf2_YmoWkezDfVbrIjK0w&s",
    imageSize: 200
}

export default function Profile () {
    return (
        <>
            <h1>{user.name}</h1>
            <img
                src={user.imageUrl}
                alt={"Photo of " + user.name}
                style = {{
                    width: user.imageSize,
                    height: user.imageSize,
                }}
                className="Profile__img"
            />
        </>
    )
}