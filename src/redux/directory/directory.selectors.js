import { createSelector } from "reselect";

const selectCategory = (state) => state.directory;

export const selectDirectorySections = createSelector(
    [selectCategory],
    directory => directory.categories
)