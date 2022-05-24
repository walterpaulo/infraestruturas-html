import { ITecnology } from "../util/ITecnology";

const ansible = new URL('../../public/ansible.png', import.meta.url).href
const docker = new URL('../../public/docker.png', import.meta.url).href
const docker_swarn = new URL('../../public/docker_swarn.png', import.meta.url).href
const terraform = new URL('../../public/terraform.png', import.meta.url).href

export const Tecnlogies: ITecnology[] = [
    {
        title: "Gerenciamento de Configuração",
        src: ansible,
        name: "Ansible"
    },
    {
        title: "Container",
        src: docker,
        name: "Docker"
    },
    {
        title: "Orquestrador de Container",
        src: docker_swarn,
        name: "Docker Swarn"
    },
    {
        title: "Provisionamento de infraestrutura",
        src: terraform,
        name: "Terraform"
    }
]