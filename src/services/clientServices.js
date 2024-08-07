const { PrismaClient } = require("@prisma/client");
const { randomUUID } = require("node:crypto")
const prisma = new PrismaClient();

exports.getAll = async (search) => {
  if (!search) {
    return await prisma.user.findMany();
  }
  
  else{
    return prisma.user.findMany({
      where: {
        OR: [
          {
            title: {
              contains:search,
              mode: "insensitive",
            },
          },
          {
            description: {
              contains: search,
              mode: 'insensitive',
            },
          },
        ],
      },
    })
  } 
};

exports.create = async (title, description) => {
  return await prisma.user.create({
    data: {
      id: randomUUID(),
      title: title,
      description: description,
      date_completed: null,
      date_created: new Date().toLocaleString("pt-BR", {
        timeZone: "America/Sao_Paulo",
      }),
      date_update: new Date().toLocaleString("pt-BR", {
        timeZone: "America/Sao_Paulo",
      }),
    },
  });
};

exports.update = async (id, title, description) => {
  return await prisma.user.update({
    where: { id: id },
    data: {
      title: title,
      description: description,
      date_update: new Date().toLocaleString("pt-BR", {
        timeZone: "America/Sao_Paulo",
      }),
    },
  });
};

exports.remove = async (id) => {
  return await prisma.user.delete({
    where: { id: id }
  });
};

exports.updateStatus = async (id, status) => {
  return await prisma.user.update({
    where: { id: id },
    data:{
      date_completed: status
    }
  });
};
