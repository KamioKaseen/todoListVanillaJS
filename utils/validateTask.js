function validateTaskText(taskText) {
    if (taskText === '') {
        alert('Задача не может быть пустой');
        return false;
    }
    if (taskText.length > 100) {
        alert('Задача не может содержать более 100 символов');
        return false;
    }
    return true;
}

export default validateTaskText;