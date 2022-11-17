import { createSlice } from '@reduxjs/toolkit';

export type Tag = string;
export type Folder = string;
export type Score = number;

export type Review = {
  id: number,
  title: string,
  body: string,
  imageUrl: string,
  date: string,
  tags: Tag[],
  folder: Folder,
  score: Score,
};

export interface ReviewsState {
  reviews: Review[],
  folders: Folder[],
  tags: Tag[]
};

const initialState: ReviewsState = {
  reviews: [
    {
      id: 0,
      title: "Spider-Man",
      body: "The best movie I've ever watched!",
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqPIAkfpbHYYRDhux_ZjF4e1sRXU5llWJbIH0_7qebRoNpdWdJwnqTTWjn423RNeBH3V0&usqp=CAU',
      date: new Date('03.15.2005').toLocaleDateString(),
      tags: ['Films', 'Super Heroes', 'Spider man', 'Some tag', 'Loooooooooooooong tag', 'Iron Man'],
      folder: 'I am a reaaaaaally long folder name',
      score: 9
    },
    {
      id: 1,
      title: "Spider-Man 2",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore eum molestiae! Ipsum perspiciatis laborum facere magnam quia natus labore, repudiandae nulla doloribus eaque eveniet dignissimos dolorum, amet consequatur ex quaerat eius veniam, quas nihil totam unde! Corrupti culpa animi atque ratione cum explicabo tenetur? Laboriosam a molestiae, ipsum mollitia doloribus odit, quis porro aut repellendus ad saepe deserunt corrupti obcaecati est quisquam aliquam eveniet voluptatem illum vitae. Incidunt possimus aliquam a doloremque sequi iste nesciunt, consequuntur vel. Ipsum, iste soluta aperiam vero sunt alias fugit incidunt accusamus esse, cum quidem nisi repellat nobis molestiae deserunt. Molestias vitae unde corrupti?",
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqPIAkfpbHYYRDhux_ZjF4e1sRXU5llWJbIH0_7qebRoNpdWdJwnqTTWjn423RNeBH3V0&usqp=CAU',
      date: new Date('03.16.2005').toLocaleDateString(),
      tags: ['Super Heroes', 'Spider man'],
      folder: 'Watch later',
      score: 2
    },
    {
      id: 2,
      title: "Super man",
      body: "Not really good movie :(",
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3KTWxI4SfE-1Eb1nAtGpilK3bghEBNc0hJQ&usqp=CAU',
      date: new Date('11.11.2021').toLocaleDateString(),
      tags: ['Films', 'Super Heroes', 'Loooooooooooooong tag'],
      folder: 'I am a reaaaaaally long folder name',
      score: 5
    },
  ],
  folders: ['Watched', 'Watch later', 'Watching', 'Dropped', 'Delayed', 'I am a heck long folder name'],
  tags: ['Films', 'Super Heroes', 'Spider man', 'Some tag', 'Loooooooooooooong tag', 'Iron Man']
};

const reviewsSlice = createSlice({
  name: 'reviewsState',
  initialState,
  reducers: {
    addPost(){},
    removePost(){}
  },
});

export const {addPost, removePost} = reviewsSlice.actions; 
export default reviewsSlice.reducer;