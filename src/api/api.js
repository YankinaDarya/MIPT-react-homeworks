export async function addTask(name, description, projectId, priority) {
    const data = { name: name, description: description, projectId: projectId, priority:priority  };
    const response = await fetch('http://valerystatinov.me/tasks/', {
        method: 'POST',
        body: JSON.stringify(data)
    });
    if (response.status === 200) {
        return null;
    }
    return response.json();
}

export async function addProject(name) {
    const data = {name: name};
    const response = await fetch('http://valerystatinov.me/projects/', {
        method: 'POST',
        body: JSON.stringify(data)
    });
    if (response.status === 200) {
        return null;
    }
    return response.json();
}

export async function getProjects() {
    const response = await fetch('http://valerystatinov.me/projects/', {
        method: 'GET'
    });
    return response.json();
}

export async function getTasks(projectId) {
    const response = await fetch('http://valerystatinov.me/tasks/?projectId=' + projectId, {
        method: 'GET'
    });
    return response.json();
}