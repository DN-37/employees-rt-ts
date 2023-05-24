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
  
    if (!data.name || !data.experience) {
      return res.status(400).json({ data: "Все поля обязятельные" });
    }
  
    const skill = await prisma.employee.update({
      where: {
        id: '557b95b1-4d71-4e95-afd8-ec13a435195c',
      },
      data: {
        createdSkill: {
          create: data,
        },
      },
    });
  
    res.status(201).json(skill);
  };

  module.exports = {
    all,
    add,
  };
  
