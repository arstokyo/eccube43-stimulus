# ECCube OCI Ansible Deployment

This project provides an Ansible-based deployment solution for the EC-CUBE Symfony application on Oracle Cloud Infrastructure (OCI). It includes playbooks, roles, and templates to automate the setup and deployment process.

## Project Structure

- **ansible/**: Contains all Ansible-related files.
  - **group_vars/**: Global variables applicable to all hosts.
    - `all.yml`: Configuration variables for all hosts.
  - **host_vars/**: Instance-specific variables.
    - `oci_instance.yml`: Configuration for the OCI instance.
  - **inventories/**: Inventory files for different environments.
    - `production`: Hosts managed in the production environment.
  - **playbooks/**: Ansible playbooks for deployment and setup.
    - `deploy.yml`: Playbook for deploying the Symfony application.
    - `setup_oci.yml`: Playbook for setting up the OCI environment.
  - **roles/**: Contains roles for organizing tasks and templates.
    - **common/**: Common tasks and templates.
      - `tasks/main.yml`: Main tasks for the common role.
      - `templates/.env.j2`: Jinja2 template for the `.env` file.
    - **symfony/**: Tasks and templates specific to Symfony.
      - `tasks/main.yml`: Main tasks for the Symfony role.
      - `templates/parameters.yml.j2`: Jinja2 template for the `parameters.yml` file.
    - **oci/**: Tasks and templates for OCI management.
      - `tasks/main.yml`: Main tasks for the OCI role.
      - `templates/oci_config.j2`: Jinja2 template for the OCI configuration file.

## Setup Instructions

1. **Clone the Repository**: Clone this repository to your local machine or server.
   
   ```bash
   git clone <repository-url>
   cd eccube-oci-ansible-deploy
   ```

2. **Install Ansible**: Ensure that Ansible is installed on your machine. You can install it using pip:

   ```bash
   pip install ansible
   ```

3. **Install Required Roles**: Use the `requirements.yml` file to install necessary Ansible roles.

   ```bash
   ansible-galaxy install -r requirements.yml
   ```

4. **Configure Variables**: Update the variable files in `ansible/group_vars/all.yml` and `ansible/host_vars/oci_instance.yml` with your specific configurations, such as database credentials and instance details.

5. **Run the Playbooks**:
   - To set up the OCI environment, run:
     ```bash
     ansible-playbook ansible/playbooks/setup_oci.yml
     ```
   - To deploy the EC-CUBE application, run:
     ```bash
     ansible-playbook ansible/playbooks/deploy.yml
     ```

## Usage Guidelines

- Ensure that you have the necessary permissions and access to your OCI account.
- Review and customize the playbooks and templates as needed for your specific deployment requirements.
- Monitor the output of the playbooks for any errors or issues during the deployment process.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.