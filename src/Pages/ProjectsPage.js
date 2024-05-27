import React from "react";
import { ProjectData } from "../Data/ProjectData";

function ProjectsPage() {
  return (
    <div
      className="ProjectPage pt-10 md:py-20  grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      id="projects"
    >
     { ProjectData?.map((items)=> <div className="Projectcards">
        <article class="rounded-lg border p-4 shadow-sm transition hover:shadow-lg sm:p-6">
          <a href="#">
            <h3 class="mt-0.5 text-xl font-semibold text-[#b8ff97]">
              {items.name}
            </h3>
          </a>
          <p class="mt-2 line-clamp-3 text-lg/relaxed">
          {items.description}
          </p>

          <a
            href={items.link}
            class="group mt-4 inline-flex items-center gap-1 text-xl font-medium text-blue-600"
          >
            Find out 
            <span
              aria-hidden="true"
              class="block transition-all group-hover:ms-0.5 rtl:rotate-180"
            >
              &rarr;
            </span>
          </a>
        </article>
      </div>) }
    </div>
  );
}

export default ProjectsPage;
