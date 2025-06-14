import axios from "axios";
import { notify } from "./Notify.jsx";

const UseTutorials = () => {
    const fetchTutorials = async () => {
        try {
            const response = await axios.get("http://localhost:4000/KarateTutorial");
            return response.data;
        } catch (error) {
            console.error("Failed to fetch tutorials:", error);
            notify("Fetch tutorials failed", "red");
            return [];
        }
    };

    const addTutorial = async (tutorialData) => {
        try {
            const response = await axios.post("http://localhost:4000/KarateTutorial", tutorialData);
            notify("Tutorial added", "green");
            return response.data;
        } catch (error) {
            console.error("Failed to add tutorial:", error);
            notify("Add tutorial failed", "red");
            throw error;
        }
    };

    const editTutorial = async (id, tutorialData) => {
        try {
            const response = await axios.put(`http://localhost:4000/KarateTutorial/${id}`, tutorialData);
            return response.data;
        } catch (error) {
            console.error("Failed to update tutorial:", error);
            notify("Update tutorial failed", "red");
            throw error;
        }
    };

    const deleteTutorial = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/KarateTutorial/${id}`);
            notify("Tutorial deleted", "green");
        } catch (error) {
            console.error("Failed to delete tutorial:", error);
            notify("Delete tutorial failed", "red");
            throw error;
        }
    };

    const addComment = async (commentInfo) => {
        try{
            await axios.post("http://localhost:4000/Comments", commentInfo);
        } catch(error) {
            console.error("Failed to send comment:", error);
            notify("Failed to send comment:", error);
            throw error;
        }
    }

    const getComment = async () => {
        try {
            const response = await axios.get("http://localhost:4000/Comments");
            return response.data;
        } catch (error) {
            console.error("Failed to get comments:", error);
            notify("Failed to get comments", "red");
            throw error;
        }
    };

    const deleteComment = async (id) => {
        try{
            const response = await axios.delete(`http://localhost:4000/Comments/${id}`);
            return response.data;
        }catch(error) {
            console.error("Failed to delete comment:", error);

            throw error;
        }
    }


    return {
        fetchTutorials,
        addTutorial,
        editTutorial,
        deleteTutorial,
        addComment,
        getComment,
        deleteComment,
    };
};

export default UseTutorials;