import React from "react";
import styled from "styled-components";
import BlogCard from "./movieCard";

const MainDiv = styled.div`
  width: 100%;
  padding: 49px 67px 61px 58px;
  background: #000;
`;
const FormDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TextPara = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  color: #fff;
  margin: 0 0 38px 0;
`;
const ButtonDiv = styled.button`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #3aade1;
  height: 23px;
  background: transparent;
  border: none;
`;
const FavouriteData = [
  {
    id: 1,
    LogoR: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SY500_CR0,0,337,500_AL_.jpg",
    title: "Black Panther",
    year: "2018",
    ParaN:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
  },
  {
    id: 2,
    LogoR: "https://images-na.ssl-images-amazon.com/images/M/MV5BYWMxYWVjNzAtMTY0YS00YWQyLWExMGItMjUxODkwYzQyNzMwXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SY500_CR0,0,328,500_AL_.jpg",
    title: "Grottmannen Dug",
    year: "2018",
    ParaN:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
  },
  {
    id: 3,
    LogoR: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1NTk0NTc1OV5BMl5BanBnXkFtZTgwNTMwMTE4NDM@._V1_SY500_CR0,0,281,500_AL_.jpg",
    title: "Aiyaary",
    year: "2019",
    ParaN:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
  },
  {
    id: 3,
    LogoR: "https://images-na.ssl-images-amazon.com/images/M/MV5BYThiMjg4ZDAtNjk5ZS00ZTUxLThmM2ItMGI0ZTE1NjRhNWNmXkEyXkFqcGdeQXVyNTQ3MjE4NTU@._V1_SY500_CR0,0,334,500_AL_.jpg",
    title: "Samson",
    year: "2019",
    ParaN:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
  },
  {
    id: 3,
    LogoR: "https://images-na.ssl-images-amazon.com/images/M/MV5BMzU3ODQ3MzQ5Nl5BMl5BanBnXkFtZTgwMDQwMDIzNDM@._V1_SY500_CR0,0,338,500_AL_.jpg",
    title: "Loveless",
    year: "2017",
    ParaN:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
  },
  {
    id: 1,
    LogoR: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SY500_CR0,0,337,500_AL_.jpg",
    title: "Black Panther",
    year: "2018",
    ParaN:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
  },
  {
    id: 2,
    LogoR: "https://images-na.ssl-images-amazon.com/images/M/MV5BYWMxYWVjNzAtMTY0YS00YWQyLWExMGItMjUxODkwYzQyNzMwXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SY500_CR0,0,328,500_AL_.jpg",
    title: "Grottmannen Dug",
    year: "2018",
    ParaN:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
  },
  {
    id: 3,
    LogoR: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1NTk0NTc1OV5BMl5BanBnXkFtZTgwNTMwMTE4NDM@._V1_SY500_CR0,0,281,500_AL_.jpg",
    title: "Aiyaary",
    year: "2019",
    ParaN:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
  },
  {
    id: 3,
    LogoR: "https://images-na.ssl-images-amazon.com/images/M/MV5BYThiMjg4ZDAtNjk5ZS00ZTUxLThmM2ItMGI0ZTE1NjRhNWNmXkEyXkFqcGdeQXVyNTQ3MjE4NTU@._V1_SY500_CR0,0,334,500_AL_.jpg",
    title: "Samson",
    year: "2019",
    ParaN:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
  },
  {
    id: 3,
    LogoR: "https://images-na.ssl-images-amazon.com/images/M/MV5BMzU3ODQ3MzQ5Nl5BMl5BanBnXkFtZTgwMDQwMDIzNDM@._V1_SY500_CR0,0,338,500_AL_.jpg",
    title: "Loveless",
    year: "2017",
    ParaN:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
  },
  {
    id: 1,
    LogoR: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SY500_CR0,0,337,500_AL_.jpg",
    title: "Black Panther",
    year: "2018",
    ParaN:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
  },
  {
    id: 2,
    LogoR: "https://images-na.ssl-images-amazon.com/images/M/MV5BYWMxYWVjNzAtMTY0YS00YWQyLWExMGItMjUxODkwYzQyNzMwXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SY500_CR0,0,328,500_AL_.jpg",
    title: "Grottmannen Dug",
    year: "2018",
    ParaN:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
  },
  {
    id: 3,
    LogoR: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1NTk0NTc1OV5BMl5BanBnXkFtZTgwNTMwMTE4NDM@._V1_SY500_CR0,0,281,500_AL_.jpg",
    title: "Aiyaary",
    year: "2019",
    ParaN:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
  },
  {
    id: 3,
    LogoR: "https://images-na.ssl-images-amazon.com/images/M/MV5BYThiMjg4ZDAtNjk5ZS00ZTUxLThmM2ItMGI0ZTE1NjRhNWNmXkEyXkFqcGdeQXVyNTQ3MjE4NTU@._V1_SY500_CR0,0,334,500_AL_.jpg",
    title: "Samson",
    year: "2019",
    ParaN:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
  },
  {
    id: 3,
    LogoR: "https://images-na.ssl-images-amazon.com/images/M/MV5BMzU3ODQ3MzQ5Nl5BMl5BanBnXkFtZTgwMDQwMDIzNDM@._V1_SY500_CR0,0,338,500_AL_.jpg",
    title: "Loveless",
    year: "2017",
    ParaN:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
  },
];

export default function BlogsComponent() {
  return (
    <>
      <MainDiv>
        <FormDiv>
          <TextPara>Featured Movies</TextPara>
        </FormDiv>

        <div className="wrapper-favourite-card">
          <ul className="auto-grid-favourite-card">
            {FavouriteData.map((Item) => (
              <BlogCard LogoR={Item.LogoR} ParaN={Item.title} Year={Item.year}/>
            ))}
          </ul>
        </div>
    
      </MainDiv>
    </>
  );
}
