window.BeshoyProgress = { overall: () => Math.round(getState().completedLessons.length / ALL_LESSONS.length * 100), completed: () => getState().completedLessons.length };
