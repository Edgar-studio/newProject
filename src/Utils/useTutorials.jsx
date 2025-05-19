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
            notify("Tutorial updated", "green");
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

    return {
        fetchTutorials,
        addTutorial,
        editTutorial,
        deleteTutorial,
    };
};

export default UseTutorials;