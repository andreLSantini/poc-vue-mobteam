<template>
    <ContentWrapper>
        <div class="content-heading">
            <div>Cadastro de Usuario
            </div>
        </div>
        <div class="col-md-12">
                <div class="card card-default">
                    <div class="card-body">
                        <form class="row">
                            <div class="form-group col-12 col-md-6 col-sm-6 col-xl-6 col-xs-12">
                                <label>Nome:</label>
                                <input class="form-control"  placeholder="Digite o nome " />
                            </div>
                            <div class="form-group col-12 col-md-6 col-sm-6 col-xl-6 col-xs-12">
                                <label>Email</label>
                                <input class="form-control" type="email" placeholder="Digite o email" />
                            </div>
                            <div class="form-group col-12 col-md-4 col-sm-4 col-xl-4 col-xs-12">
                                <label>Login</label>
                                <input class="form-control"  placeholder="Digite o login" />
                            </div>
                            <div class="form-group col-12 col-md-4 col-sm-4 col-xl-4 col-xs-12">
                                <label>Senha</label>
                                <input class="form-control" type="password" placeholder="Password" />
                            </div>
                            <div class="form-group col-12 col-md-4 col-sm-4 col-xl-4 col-xs-12">
                                <label>Password</label>
                                <input class="form-control" type="password" placeholder="Password" />
                            </div>
                            <div class="form-group col-12 col-md-4 col-sm-4 col-xl-4 col-xs-12">
                                <label>Cidade:</label>
                                <select class="custom-select custom-select-sm">
                                    <option selected="">ADMINISTRAÇÃO</option>
                                    <option value="1">LIMEIRA</option>
                                </select>
                            </div>
                            <div class="form-group col-12 col-md-4 col-sm-4 col-xl-4 col-xs-12">
                                <label>ÁREA</label>
                                <select class="custom-select custom-select-sm">
                                    <option selected="">ADMINISTRAÇÃO</option>
                                    <option value="1">SISTEMAS</option>
                                    <option value="2">SUPORTE</option>
                                </select>
                            </div>
                            <div class="form-group col-12 col-md-4 col-sm-4 col-xl-4 col-xs-12">
                                <label>Perfil</label>
                                <select class="custom-select custom-select-sm">
                                    <option value="1">ACOMPANHAMENTO DE EQUIPES</option>
                                    <option value="2">ADMINISTRADOR</option>
                                    <option value="2">ATENDIMENTO AO CLIENTE</option>
                                    <option value="2">OPERADOR</option>
                                    <option value="2">PROGRAMADOR</option>
                                    <option value="2">PROGRAMADOR TERCEIRO</option>
                                </select>
                            </div>     
                            <div class="form-group col-12 col-md-6 col-sm-6 col-xl-6 offset-md-9 offset-sm-8 offset-lg-8">
                                <router-link to="/usuario"  size="md" class="btn mb-2 mr-2" variant="outline-danger">Voltar</router-link>
                                <b-button size="md" class="mb-2 mr-2" variant="outline-primary" type="button">Salvar</b-button>
                            </div>                        
                        </form>
                    </div>
                </div>
                <!-- END card-->
            </div>
    </ContentWrapper>
</template>

