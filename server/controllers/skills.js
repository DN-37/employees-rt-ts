const { prisma } = require("../prisma/prisma-client");


const all = async (req, res) => {
    try {
      const skills = await prisma.skill.findMany();
  
      res.status(200).json(skills);
    } catch {
      res.status(400).json({ message: "Не удалось получить навыки и умения" });
    }
  };
/**
 * 
 * @route POST api/skills/add
 * @desc Добавление cкиллов
 * @access Private
 */
const add = async (req, res) => {
    const data = req.body;
  
    if (!data.name || !data.experience || !data.employeeId) {
      return res.status(400).json({ data: "Все поля обязятельные" });
    }
  
    const skill = await prisma.employee.update({
      where: {
        id: data.employeeId,
      },
      data: {
        createdSkill: {
          create: {
            name: data.name,
            experience: data.experience
          },
        },
      },
    });
  
    res.status(201).json(skill);
  };

  module.exports = {
    all,
    add,
  };
  
